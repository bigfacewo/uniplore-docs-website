### 组件介绍
**“Lift曲线”（Lift Curve）**控件根据随机分类器来衡量所选分类器的性能。该控件显示了预测为真的实例数量与确实为真的实例数量之间的关系，从而可以确定最佳的分类器及其阈值。

<hr/>

- 输入：
  - evr：分类器对数据的测试结果
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“Lift曲线”（Lift Curve）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/evaluate/lift-curve/param.png)

点击**“查看结果”**按钮，查看曲线：
![visualization](/img/aistudio/evaluate/lift-curve/visualization.png)

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
      默认选中的类是按字母的顺序选择第一个
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分类器</td> 
      <td>
      用户可以选择需要绘制的曲线，点击一个分类器可以选择或取消选择
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示升力凸包</td> 
      <td>
      为所有分类器绘制凸起曲线，曲线显示了每个期望的真阳率/阳率的最佳分类器
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“K近邻”（KNN）**、**“决策树”（Tree）**、**“逻辑回归”（Logistic Regression）**等模型在**“评分和测试”（Test & Score）**控件中进行测试和评估，最后将评估结果在**“Lift曲线”（Lift Curve）**控件中进行展示。   
![workflow](/img/aistudio/evaluate/lift-curve/workflow.png)

案例中加载 titanic 数据集，针对**“K近邻”（KNN）**、**“决策树”（Tree）**、**“逻辑回归”（Logistic Regression）**算法进行模型测试和评估，**“评分和测试”（Test & Score）**显示每个分类器的评估结果。然后根据**“评分和测试”（Test & Score）**的结果绘制升力曲线。在下面的例子中，我们试图看到 titanic 数据集上“幸存者”的预测质量。本例在**“评分和测试”（Test & Score）**控件中比较了三个分类器，并将结果送发到**“Lift曲线”（Lift Curve）**控件以查看其随机模型的性能，从图中可看到决策树是三者中最好的。因此可以将其设置为最优分类的阈值。案例中控件的配置以及执行结果如下图所示。   
![workflow-result](/img/aistudio/evaluate/lift-curve/workflow-result.png)