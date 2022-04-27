### 组件介绍
**“混淆矩阵”（Confusion Matrix）**控件显示预测类和实际类之间的比例。从“混淆矩阵”（Confusion Matrix）可得出预测类和实际类之间实例的数量或比例。通过这种方式可以得到哪些实例被错误分类以及被分成了哪一类。

<hr/>

- 输入：
  - evr：分类器对数据的测试结果
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“混淆矩阵”（Confusion Matrix）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/evaluate/confusion-matrix/param.png) ](/img/aistudio/evaluate/confusion-matrix/param.png)

点击**“查看结果”**按钮，查看曲线：
[ ![](/img/aistudio/evaluate/confusion-matrix/visualization.png) ](/img/aistudio/evaluate/confusion-matrix/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>分类器</td> 
      <td>
      当评估结果包含多个学习算法时，须在分类器中选择一个。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>显示</td> 
      <td>
      选择在矩阵中显示的数据：<br/>
      &emsp;&emsp;实例个数：以数字形式显示正确和不正确的分类实例<br/>
      &emsp;&emsp;预测的概率：显示分类的真实类别是多少<br/>
      &emsp;&emsp;实际的概率：显示与预测概率相反的关系
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“K近邻”（KNN）**、**“决策树”（Tree）**、**“逻辑回归”（Logistic Regression）**等模型在**“评分和测试”（Test & Score）**控件中进行测试和评估，最后将评估结果在**“混淆矩阵”（Confusion Matrix）**控件中进行展示。   
[ ![](/img/aistudio/evaluate/confusion-matrix/workflow.png) ](/img/aistudio/evaluate/confusion-matrix/workflow.png)

案例中加载 titanic 数据集，针对**“K近邻”（KNN）**、**“决策树”（Tree）**、**“逻辑回归”（Logistic Regression）**算法进行测试和评估，**“评分和测试”（Test & Score）**显示每个分类器的评估结果。然后根据**“评分和测试”（Test & Score）**的结果绘制混淆矩阵，以进一步交叉验证算法的预测结果。**“混淆矩阵”（Confusion Matrix）**可以查看有多少实例被错误分类以及错误的类型，案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/evaluate/confusion-matrix/workflow-result1.png) ](/img/aistudio/evaluate/confusion-matrix/workflow-result1.png)

[ ![](/img/aistudio/evaluate/confusion-matrix/workflow-result2.png) ](/img/aistudio/evaluate/confusion-matrix/workflow-result2.png)

[ ![](/img/aistudio/evaluate/confusion-matrix/workflow-result3.png ](/img/aistudio/evaluate/confusion-matrix/workflow-result3.png)