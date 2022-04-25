### 组件介绍
**“Python脚本（Python Script）”**控件可以用于给页面或控件添加注释说明。
<hr/>

- 输入：
  - in：通过控件连接传入的数据
- 输出：
  - out：执行脚本后设置的输出数据

<hr/>


### 页面介绍
点击**“Python脚本（Python Script）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/tool/python-script/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>python代码</td> 
      <td>
      编写需要执行的python代码，点击右下角最大化按钮，可使代码编辑框最大化 <br/>
      点击“运行”按钮可以查看代码执行结果 <br/>
      点击“删除输出”按钮可以删除输出 <br/>
      点击“添加输出”按钮可以添加输出
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
如下图所示的工作流中，使用**“加载数据集（File）”**控件加载iris数据，使**“Python脚本（Python Script）”**控件执行 Python 脚本代码，连接**“查看数据（Data Table）”**控件查看处理后的数据。  
![workflow](/img/aistudio/tool/python-script/workflow.png)

案例中加载“iris”数据集，**“Python脚本（Python Script）”**控件在python代码中输入如图所示的代码，代码功能为为输入数据集添加一个特征属性x，值均为1。案例中控件的配置及执行结果如下图所示。  
![workflow-result](/img/aistudio/tool/python-script/workflow-result.png)