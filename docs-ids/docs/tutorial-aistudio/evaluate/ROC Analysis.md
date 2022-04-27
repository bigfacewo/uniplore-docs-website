### 组件介绍
**“ROC曲线”（ROC Analysis）**控件展示测试模型和相应凸包的ROC 曲线。它用作分类模型之间的比较的平均值。该曲线在x轴上绘制假阳率与 y 轴上的真阳率。曲线越接近 ROC 空间的左侧边界和顶部边界，分类器越精确。该组件还可以在一定误差下确定最优分类器和阈值。

<hr/>

- 输入：
  - evr：分类器对数据的测试结果
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“ROC曲线”（ROC Analysis）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/evaluate/roc-analysis/param.png) ](/img/aistudio/evaluate/roc-analysis/param.png)

点击**“查看结果”**按钮，查看曲线：
[ ![](/img/aistudio/evaluate/roc-analysis/visualization.png) ](/img/aistudio/evaluate/roc-analysis/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>目标类</td> 
      <td>
      选择目标类，默认选中的类是按字母的顺序选择第一个
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分类器</td> 
      <td>
      如果测试结果包含多个分类器，则用户可以选择需要绘制的曲线，点击一个分类器可以选择或取消选择
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>合并ROC曲线</td> 
      <td>
      当数据来自多次迭代的训练或测试（如 k-fold 交叉验证）时，可以显示平均结果。其中平均选项包括：<br/>
      &emsp;&emsp;根据折数合并预测：将所有测试数据视为单次迭代结果<br/>
      &emsp;&emsp;平均真阳率：垂直平均曲线，显示相应的置信区间<br/>
      &emsp;&emsp;平均真阳率和假阳率阈值：遍历阈值，平均曲线的位置并显示水平和垂直置信区间<br/>
      &emsp;&emsp;显示单独曲线：显示所有曲线，而不计算平均值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>ROC凸包</td> 
      <td>
      “显示凸曲线”选项是指显示每个单独分类器上的凸曲线。“显示凸包”选项显示结合了所有分类器的凸包
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分析</td> 
      <td>
      此部分用于分析曲线，用户可以指定假阳性（FP）和假阴性（FN）的比重以及目标类别概率<br/>
      默认阈值（0.5）表示如果预测目标等级的概率大于等于 0.5，则由分类器实现ROC曲线上的点<br/>
      显示性能曲线在 ROC 空间中显示出 iso 性能，因此该线上的所有点都会带来相同的利润/损失
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“K近邻”（KNN）**、**“决策树”（Tree）**等模型在**“评分和测试”（Test & Score）**控件中进行测试和评估，最后将评估结果在**“ROC曲线”（ROC Analysis）**控件中进行展示。   
[ ![](/img/aistudio/evaluate/roc-analysis/workflow.png) ](/img/aistudio/evaluate/roc-analysis/workflow.png)

案例中加载 voting 数据集，针对**“K近邻”（KNN）**、**“决策树”（Tree）**算法进行模型测试和评估，**“评分和测试”（Test & Score）**显示每个分类器的评估结果。然后根据**“评分和测试”（Test & Score）**的结果ROC曲线。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/evaluate/roc-analysis/workflow-result.png) ](/img/aistudio/evaluate/roc-analysis/workflow-result.png)